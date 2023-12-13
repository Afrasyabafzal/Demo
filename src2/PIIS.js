interface CustomDatePickerProps {
  initialDate: Date;
}

interface CustomDatePickerState {
  selectedDate: Date;
}

class CustomDatePicker extends Component<CustomDatePickerProps, CustomDatePickerState> {
  constructor(props: CustomDatePickerProps) {
    super(props);
    this.state = {
      selectedDate: props.initialDate,
    };
  }

  handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    this.setState({ selectedDate: newDate });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <div>
        <input
          type="date"
          value={selectedDate.toISOString().slice(0, 10)}
          onChange={this.handleDateChange}
        />
        <p>Selected Date: {selectedDate.toISOString().slice(0, 10)}</p>
      </div>
    );
  }
}
