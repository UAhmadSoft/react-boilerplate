import sizes from './sizes';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '"Poppins" , "sans-serif"',
  },

  avatar: {
    backgroundColor: '#06C6FF',
    // backgroundColor: '#677EFF',
  },

  sectionReg: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  containerReg: {
    position: 'relative',
    width: 800,
    height: 500,
    background: '#fff',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    pointerEvents: 'initial',
    border: '1px solid #ccc',
  },

  user: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
  },

  imgBx: {
    position: 'relative',
    width: '50%',
    height: '100%',
    background: '#e1e4e6',
    transition: '2.5s',
    '& img': {
      position: 'absolute',
      top: '50%',
      left: '25%',
      width: '85%',
      height: '50%',
      objectFit: 'cover',
      transform: 'translate(-20%, -50%)',
    },

    [sizes.down('md')]: {
      display: 'none',
    },
  },

  formBx: {
    position: 'relative',
    width: '50%',
    height: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    transition: '2.5s',
    flexDirection: 'column',

    '& form h2': {
      fontSize: 18,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 2,
      textAlign: 'center',
      width: '100%',
      marginBottom: 10,
      color: '#555',
    },

    '& form input': {
      position: 'relative',
      width: '100%',
      padding: 10,
      background: '#f5f5f5',
      color: '#333',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      margin: '8px 0',
      fontSize: 14,
      letterSpacing: 1,
      fontWeight: 300,
    },

    '& form input[type="submit"]': {
      borderRadius: 20,
      maxWidth: 100,
      background: '#06C6FF',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 1,
      transition: '2.5s',
    },

    [sizes.down('md')]: {
      width: '100%',
    },
  },

  link: {
    position: 'relative',
    marginTop: 20,
    fontSize: 12,
    letterSpacing: 1,
    color: '#555',
    textTransform: 'uppercase',
    fontWeight: 300,

    '& a': {
      fontWeight: 600,
      textDecoration: 'none',
      color: '#06C6FF',
      marginLeft: 10,
      fontSize: 13,
      cursor: 'pointer',
    },
  },

  signupBx: {
    // pointerEvents: 'none',

    '& formBx': {
      left: '100%',
    },

    '& imgBx': {
      left: '-100%',
    },
  },
  signinBx: {
    '& formBx': {
      left: '0%',
    },

    '& imgBx': {
      left: '0%',
    },
  },
  isActive: {
    // pointerEvents: 'initial',
    color: 'white',
    width: '100%',
    height: '100%',
  },
  active: {
    // pointerEvents: 'initial',
    color: 'white',
    '& signupBx': {
      // pointerEvents: 'initial',

      '& formBx': {
        left: 0,
      },

      '& imgBx': {
        left: '0%',
      },
    },

    '& signinBx': {
      '& formBx': {
        left: '100%',
      },

      '& imgBx': {
        left: '-100%',
      },
    },
  },

  [sizes.down('md')]: {
    width: '400px',
  },
};
