const paginate = (followers: any[]) => {
    const itemsPerPage = 12;
    const pages = Math.ceil(followers.length / itemsPerPage);
  
    const newFollowers: any[] = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage;
      return followers.slice(start, start + itemsPerPage);
    });
    return newFollowers;
  };
  
  export default paginate;