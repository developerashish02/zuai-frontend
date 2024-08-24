const useAuth = () => {
  const token = localStorage.getItem("token");

  return token === null ? false : true;
};

export default useAuth;
