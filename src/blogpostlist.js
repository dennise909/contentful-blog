
const spaceId = 'pej6b4fm1r13'
const accessToken = 'h4qduEwXfF-mU0sxyfJD1XNOT9eTyB84rBErjA9Wlqs'
const environment = 'master'

const query = `
query{
  postCollection{
    items{
      author{
        name
      }
      publishedDate
      postName
      content
      intro
      category{
        categoryName
      }
      featuredImage{
        url
      }
    
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