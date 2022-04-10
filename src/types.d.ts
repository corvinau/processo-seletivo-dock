interface IUsuarioContext {
  username: string;
  updateUsername: (username: string) => void;
}

interface IRepositorioContext {
  usernameRepositorio: string;
  updateUsernameRepositorio: (username: string) => void;
}