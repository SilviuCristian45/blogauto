export class DatabaseInfo {
  public static DATABASE_HOST: string = process.env.DATABASE_HOST || '';
  public static DATABASE_PORT: number = parseInt(
    process.env.DATABASE_PORT || '3306',
  );
  public static DATABASE_USERNAME: string = process.env.DATABASE_USERNAME || '';
  public static DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD || '';
  public static DATABASE_NAME: string = process.env.DATABASE_NAME || '';
}
