type Props = {
  color: string
}

const ColorLine = ({color}: Props) => {
  return (
    <div>
      <hr style={{color:`${color}`}}/>
    </div>
  );
};

export default ColorLine;