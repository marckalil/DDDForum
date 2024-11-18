# 1. Create a user

```
curl -X POST -H "Content-Type: application/json" -d '{
"email": "example@example.com",
"firstName": "John",
"lastName": "Doe",
"username": "johndoe2"
}' http://localhost:3000/users/new
```

# 2. Verify the user was created

```
curl http://localhost:3000/users?email=example@example.com
```