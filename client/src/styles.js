import { makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=> ({
        appBar: {
          borderRadius: 15,
          margin: '30px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f6f0c4',
backgroundImage: 'linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)',

        },
        heading: {
          color: 'rgba(0,183,255, 1)',
          textShadow: '2px 2px 4px #000000',

        },
        image: {
          marginLeft: '15px',
        },
      }));