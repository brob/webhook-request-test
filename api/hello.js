// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
    try {
      const subject = event.queryStringParameters.name || 'World'
      fetch('https://webhook.site/14318fe4-c36e-4e8f-86ce-61b770acda9f')
      return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello ${subject}` }),
        // // more keys you can return:
        // headers: { "headerName": "headerValue", ... },
        // isBase64Encoded: true,
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }
  
  module.exports = { handler }
  