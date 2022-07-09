module.exports = function FileSeeds() {
  return [
    {
      guid: 'c0ed6ea2-ab99-4963-ac28-4404df8e6c6f',
      userId: '183438c9-6e1f-44ac-9c33-7e5a1b408074',
      filename: 'test-file',
      fileType: 'txt',
      description: 'This is a test file',
      category: 'text',
      location: 'user/files/183438c9-6e1f-44ac-9c33-7e5a1b408074',
      fileSize: 500
    },
    {
      guid: '5000e386-bc6a-4436-bd5e-581094a9dae1',
      userId: '183438c9-6e1f-44ac-9c33-7e5a1b408074',
      filename: 'test-file-2',
      fileType: 'jpeg',
      description: 'This is a test image file',
      category: 'image',
      location: 'user/files/183438c9-6e1f-44ac-9c33-7e5a1b408074',
      fileSize: 500
    }
  ];
};
