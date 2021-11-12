

// I want to use the .env key here instead of having an accessToken variable
const spaceId = 'y4zt3jqibesz'
const accessToken = process.env.REACT_APP_CONTENTFUL_API_KEY
const environment = 'master'

const query = `
query{
  blogPostCollection{
    items{
      postImage{url}
      postTitle
      postPreviewDescription
      postContent
    }
  }
}
`;

async function getblogposts() {
  return await (
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?access_token=${accessToken}`,
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ query }),
          }
  
      )
      .then((response) => response.json())
      .then((json) => {return json.data})
      .catch(() => {console.log("no data available")})
  )}
    export default getblogposts

    //https://graphql.contentful.com/content/v1/spaces/pej6b4fm1r13/environments/master?access_token=h4qduEwXfF-mU0sxyfJD1XNOT9eTyB84rBErjA9Wlqs