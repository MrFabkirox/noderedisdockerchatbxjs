// Require the framework and instantiate it
const fastify = require('fastify')({logger: true})
 
// Declare /hello
fastify.get('/hello', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Declare /
fastify.get('/', (request, reply) => {
  reply.send({env: process.env.MY_MESSAGE || 'Default mess'})
})
 
 
// Run the server!
fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
