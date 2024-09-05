interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(sure: boolean): void;
  isConnected(): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 5432,
// };

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // Code
  }

  disconnect(sure: boolean): void {
    // Code
  }

  isConnected(): boolean {
    return true;
  }
}
