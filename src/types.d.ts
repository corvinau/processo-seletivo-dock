interface IRepositoryData {
  createdAt: string;
  description?: string;
  htmlUrl: string;
  id: number;
  language: string;
  fullName: string;
  watchers: number;
  updatedAt: string;
}


interface IUserData {
  avatarUrl?: string;
  bio?: string;
  login: string;
  name: string;
}

interface IRepositorioContext {
  username: IUserData;
  updateUsername: (username: string) => void;
  repositorio?: IRepositoryData[];
  updateRepositorio: (username: string) => void;
}