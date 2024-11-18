import express, { Request, Response } from "express";
import cors from "cors";
import { prisma } from "./database";
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
app.post("/users/new", async (req: Request, res: Response ) => {
	try {
	const { email, username, firstName, lastName, password } = req.body;
	const user = await prisma.user.create({
		data: {
			email,
			username,
			firstName,
			lastName,
			password
		}
		
	});
	res.status(201).json(user.id);
	} catch (error) {
		res.status(400).json({ error: "Something went wrong" });
	}
});

// Edit user
app.post("/users/edit/:userId", async (req: Request, res: Response ) => {
	try {
		const { userId } = req.params;
		const { email, username, firstName, lastName } = req.body;
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
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: "Something went wrong" });
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