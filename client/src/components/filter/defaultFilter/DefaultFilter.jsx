const DefaultFilter = () => {
  return (
    <div>
      <form>
        <div>
          <select name='type' id='type' defaultValue='default'>
            <option value='event'>Event</option>
            <option value='artist'>Artist</option>
            <option value='arena'>Arena</option>
            <option value='user'>User</option>
            <option value='default'>All</option>
          </select>
          <select name='order' id='order' defaultValue='unordered'>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
            <option value='default'>Sort By</option>
          </select>
          <select name='popular' id='popular' defaultValue='unordered'>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
            <option value='default'>Popular</option>
          </select>
        </div>
        <article>
          <input type='number' defaultValue={0} min={0} max={100} id='min' />
          <span>-</span>
          <input
            type='number'
            defaultValue={1000}
            min={100}
            max={1000}
            id='max'
          />
        </article>
      </form>
    </div>
  );
};

export default DefaultFilter;
