import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import styles from './search.module.css'
import { BiSearch } from 'react-icons/bi'

const Search = ({ setFilter }) => {
  const [searchFilter, setSearchFilter] = useState('')

  const debouncedSearch = useDebounce(searchFilter, 200)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setSearchFilter(event.target.value)
  }

  useEffect(() => {
    setFilter(debouncedSearch)
  }, [debouncedSearch])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="search">
        <BiSearch size={20} />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default Search
