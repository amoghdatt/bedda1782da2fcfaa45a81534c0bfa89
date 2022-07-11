module.exports = function UserController({ repositories, knex, services }) {
  const { fileRepository, userRepository } = repositories;
  const { authTokenService, passwordService, uuidService } = services;

  this.allUserFiles = async function allUserFiles(userId) {
    const result = await fileRepository.findAllByUserId(userId, knex);
    return { files: result };
  };

  this.logIn = async function logIn(credentials) {
    const { email, password } = credentials;
    const [existingUser] = await userRepository.findByEmail(email, knex);

    if (!passwordService.verifyPassword(password, existingUser.password)) {
      return { error: 'Wrong email or password' };
    }

    const token = authTokenService.createAuthToken({
      userId: existingUser.guid
    });

    return {
      userId: existingUser.guid,
      token
    };
  };

  this.signUp = async function signUp(userDetails) {
    const userDetailsToSave = {
      ...userDetails,
      guid: uuidService.generateUUID(),
      password: passwordService.hashPassword(userDetails.password)
    };
    const newUser = await userRepository.create(userDetailsToSave, knex);

    return {
      userId: newUser.guid
    };
  };
};
