export class Api {
  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }

  async post(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }

  async put(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }

  async patch(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }

  async delete(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return await response.json();
  }
}
