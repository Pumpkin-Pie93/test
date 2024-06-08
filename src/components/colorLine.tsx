type Props = {
  color: string
}

const ColorLine = ({color}: Props) => {
  return (
    <div>
      <hr style={{backgroundColor:`${color}`, height:'18px'}}/>
    </div>
  );
};

export default ColorLine;