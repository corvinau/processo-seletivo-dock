interface IRepositoryData {
  id: number;
  htmlUrl: string;
  fullName: string;
  watchers: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
  language: string;
}

interface IUserData {
  avatarUrl?: string;
  name: string;
  login: string;
  bio?: string;
}

interface IRepositorioContext {
  username: IUserData;
  updateUsername: (username: string) => void;
  repositorio?: IRepositoryData[];
  updateRepositorio: (username: string) => void;
}