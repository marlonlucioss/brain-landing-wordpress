import * as WPAPI from 'wpapi'
const wp = new WPAPI({ endpoint: 'https://landing.brain.med.br/wp/wp-json' })
export async function getContent(resource = '', id = '') {
  try {
    const users = await wp.posts().param( resource, id )
    return users.filter(user => user.id !== 1) // we don't want the admin user
  } catch (error) {
    console.error(error)
    return []
  }
}