describe('Regular Expression Lab', () => {
  test('getEmailCount function should be exported', async () => {
    const { getEmailCount } = await import('/home/damner/code/index.js');
    expect(typeof getEmailCount === 'function').to.be.true;
  });

  test('getEmailCount function should return correct email count', async () => {
    const { getEmailCount } = await import('/home/damner/code/index.js');
    const input = 'Hi, my email is john@example.com and this is not an email: abc@def. Also, contact mike@abc.io';
    expect(getEmailCount(input) === 2).to.be.true;
  });

  test('getEmailCount should handle no match case', async () => {
    const { getEmailCount } = await import('/home/damner/code/index.js');
    const input = 'There are no emails in this string.';
    expect(getEmailCount(input) === 0).to.be.true;
  });

  test('getEmailCount should handle empty string', async () => {
    const { getEmailCount } = await import('/home/damner/code/index.js');
    const input = '';
    expect(getEmailCount(input) === 0).to.be.true;
  });
});