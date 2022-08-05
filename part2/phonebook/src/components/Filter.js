const Filter = ({ onFilter, filters }) => {
  return (
    <>
      <strong>Search For:</strong>
      <input type="search" value={filters} onChange={onFilter} />
    </>
  );
};

export default Filter;
