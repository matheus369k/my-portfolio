import { fetchAPI } from "./axios";

describe('axios', () => {
    it('should receive  correct baseURL',()=>{
        expect(fetchAPI.defaults.baseURL).toBe('http://localhost:3000');
  });
});