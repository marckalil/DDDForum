import { User } from "@prisma/client";
import express, { Request, Response } from "express";
import cors from "cors";

import { prisma } from "./database";
import { generateRandomPassword } from "./helpers";

const Errors = {
  UsernameAlreadyTaken: 'UserNameAlreadyTaken',
  EmailAlreadyInUse: 'EmailAlreadyInUse',
  ValidationError: 'ValidationError',
  ServerError: 'ServerError',
  ClientError: 'ClientError',
  UserNotFound: 'UserNotFound'
} as const;

const app = express();
app.use(express.json()); // To parse JSON bodies
/*
	* Allow requests from any origin
	* This is useful when developing locally
	* In production, you should restrict the origin to your frontend's URL
	* For example: app.use(cors({ origin: "https://your-frontend-url.com" }));
	* This will block requests from any other origin
	* This is a security measure to prevent Cross-Site Request Forgery (CSRF) attacks
	* Learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
*/
app.use(cors());

// Create user
function parseUserForResponse(user: User) {
	const { password, ...rest } = user;
	return rest;
}
app.post("/users/new", async (req: Request, res: Response ) => {
	try {
	const { email, username, firstName, lastName } = req.body;

	// Validate the input
	if (!email || !username || !firstName || !lastName) {
		res.status(400).json({ error: Errors.ValidationError, data: undefined, success: false });
		return
	}

	// Check if the user exists
	const existingUserByUsername = await prisma.user.findFirst({ where: { username } });
	if (existingUserByUsername) {
		res.status(409).json({ error: Errors.UsernameAlreadyTaken, data: undefined, success: false });
		return;
	}
	const existingUserByEmail = await prisma.user.findFirst({ where: { email } });
	if (existingUserByEmail) {
		res.status(409).json({ error: Errors.EmailAlreadyInUse, data: undefined, success: false });
		return;
	}

	const user = await prisma.user.create({
		data: {
			email,
			username,
			firstName,
			lastName,
			password: generateRandomPassword(10)
		}
	});
	const data = parseUserForResponse(user);
	res.status(201).json({ error: undefined, data, success: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: Errors.ServerError, data: undefined, success: false });
	}
});

// Edit user
app.post("/users/edit/:userId", async (req: Request, res: Response ) => {
	try {
		const { userId } = req.params;
		const { email, username, firstName, lastName } = req.body;

		// Validate the input
		if (!email || !username || !firstName || !lastName) {
			res.status(400).json({ error: Errors.ValidationError, data: undefined, success: false });
			return;
		}

		const existingUsername = await prisma.user.findFirst({ where: { username } });
		if (existingUsername) {
			res.status(409).json({ error: Errors.UsernameAlreadyTaken, data: undefined, success: false });
			return;
		}
		
		const existingEmail = await prisma.user.findFirst({ where: { email } });
		if (existingEmail) {
			res.status(409).json({ error: Errors.EmailAlreadyInUse, data: undefined, success: false });
			return;
		}

		const user = await prisma.user.update({
			where: {
				id: parseInt(userId)
			},
			data: {
				email,
				username,
				firstName,
				lastName
			}
		});
		res.status(201).json({ error: undefined, data: user, success: true });
	} catch (error) {
		res.status(500).json({ error: Errors.ServerError, data: undefined, success: false });
	}	
});

// Get a user by e-mail
app.get("/users", async (req: Request, res: Response ) => {
	try {
		const email = req.query.email as string;
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		});
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: "Something went wrong" });
	}
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});