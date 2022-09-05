export interface HttpAdapter {
  get(url: string, config?: any): Promise<any>
}