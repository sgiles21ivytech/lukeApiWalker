import { useNavigate } from "react-router-dom";

export const SearchForm = () => {

    const navigate = useNavigate()
    const submitHandler = e => {
        e.preventDefault()
        const topic = e.target.topic.value
        const id = e.target.id.value
        navigate(`/${topic}/${id}`)
    }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Topic:
        <select name="topic">
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
      </label>
      <label>
        ID:
        <input type="number" name="id" />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

