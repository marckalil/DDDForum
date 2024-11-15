import express, { Request, Response } from "express";
import cors from "cors";

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
	res.send("Create user");
});

// Edit user
app.post("/users/edit/:userId", async (req: Request, res: Response ) => {
	res.send("Edit user");
});

// Get a user by e-mail
app.get("/users", async (req: Request, res: Response ) => {
	res.send("Get user by e-mail");
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});