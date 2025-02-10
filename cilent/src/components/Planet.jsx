

export const Planet = ({data: {name, climate}}) => {

    return (
      <div className="search-results">
        <p>Name: {name}</p>
        <p>Climate: {climate}</p>
      </div>
    );

}