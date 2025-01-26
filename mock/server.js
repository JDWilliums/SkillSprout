const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Connect to db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom login endpoint
server.post('/login', (req, res) => {
  const users = router.db.get('users').value(); // Get users from db.json
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({
      user: { id: user.id, email: user.email, name: user.name },
      token: 'mock-jwt-token', // Mock token for testing
    });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});
