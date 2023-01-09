import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BallTriangle
      height={200}
      width={200}
      radius={5}
      color="#3f51b5"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle={{
        flex: 1,
        marginTop: 240,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      visible={true}
    />
  );
};
