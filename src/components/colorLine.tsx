type Props = {
  color: string
}

const ColorLine = ({color}: Props) => {
  return (
    <div>
      <hr style={{backgroundColor:`${color}`, height:'8px'}}/>
    </div>
  );
};

export default ColorLine;