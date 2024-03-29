import { gql } from '@apollo/client'

const ALL_CHARACTERS = gql`
    query getAllCharacters($name: String, $status: String, $species: String, $gender: String, $page: Int) {
        characters(page: $page, filter: { name: $name, status: $status, species: $species, gender: $gender }) {
            info {
                count,
                pages,
            }
            results {
                name,
                status,
                species,
                type,
                image,
                location {
                    id,
                    name
                },
                origin {
                    id,
                    name,
                    dimension
                }
            }
        }
    }
`
export { ALL_CHARACTERS }