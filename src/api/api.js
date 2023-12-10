import * as WPAPI from 'wpapi'
const wp = new WPAPI(
  process.env.NODE_ENV === 'development'
    ? {
      // eslint-disable-next-line no-undef
      endpoint: reactPress.api.rest_url,
      username: 'root',
      password: 'Br41n',
    }
    // eslint-disable-next-line no-undef
    : { endpoint: reactPress.api.rest_url, nonce: reactPress.api.nonce }
)
export async function getContent(resource = '', id = '') {
  try {
    const users = await wp.posts().param( resource, id )
    return users.filter(user => user.id !== 1) // we don't want the admin user
  } catch (error) {
    console.error(error)
    return []
  }
}