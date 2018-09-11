import call from './service';

describe('call API fetch method', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should post to an endpoint. ', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'This is a comment' }));
    call({
      method: 'POST',
      endpoint: '/articles/comments/',
      data: {
        title: 'Article',
        body: 'This is a comment',
      },
    }).then((res) => {
      expect(res.data).toEqual('This is a comment');
    });
  });

  it('Should fetch from an endpoint. ', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'I am the phenomenal' }));
    call({
      method: 'GET',
      endpoint: '/articles/',
    }).then((res) => {
      expect(res.data).toEqual('I am the phenomenal');
    });
  });

  it('Should return valid errors. ', () => {
    fetch.mockReject(new Error('Trial custom error message'));
    call({
      method: 'TAKE',
      endpoint: '/articles/comments/',
    }).catch((res) => {
      expect(res.message).toEqual('Trial custom error message');
    });
  });

  it('Should fetch from an endpoint with authentication. ', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'I am the phenomenal' }));
    call({
      method: 'GET',
      endpoint: '/articles/',
      authenticated: true,
    }).then((res) => {
      expect(res.data).toEqual('I am the phenomenal');
    });
  });
});
