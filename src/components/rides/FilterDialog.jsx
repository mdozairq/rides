import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Divider } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';


export default function SimpleDialog(props) {
    const { onClose,city, state, setCity, setState, open, data,setOpen } = props;


    const handleClose = () => {
        onClose();
    };

    const cities = [...new Set(data.map(q => q.city))];
    const states = [...new Set(data.map(q => q.state))]
    // console.log(cities, states);
    
    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{
            style: {
                backgroundColor: '#101010',
                textAlign: "center",
                borderRadius:"10px"
                //   boxShadow: 'none',
            },
        }}
        >
            <DialogTitle style={{ color: "#fff" }}>Filter</DialogTitle>
            <Divider sx={{ bgcolor: "#fff", width: "80%", alignSelf: "center" }} />
            <Box component="form"

                // sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:"row" }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '30px',
                    width: '270px',
                }}
            >

                <FormControl
                sx={{ m: 1, minWidth: 120 }}
                style={{background:"#232323", borderRadius:"5px" }}
                >
                    <InputLabel id="demo-dialog-select-label1" style={{ color:"#fff"}}>City</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label1"
                        id="demo-dialog-select"
                        value={city}
                        onChange={(e)=>{
                            setCity(e.target.value)
                            setOpen(false);
                        }}
                        input={<OutlinedInput label="City" />}
                        style={{color:"#fff"}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {cities && cities.map((item, id) => <MenuItem key={id} value={item} >{item}</MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl
                sx={{ m: 1, minWidth: 120 }}
                style={{background:"#232323", borderRadius:"5px" }}
                >
                    <InputLabel id="demo-dialog-select-label" style={{ color:"#fff"}}>State</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={state}
                        onChange={(e)=>{
                            setState(e.target.value);
                            setOpen(false);
                        }}
                        input={<OutlinedInput label="State" />}
                        style={{color:"#fff"}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {states && states.map((item, id) => <MenuItem key={id} value={item}>{item}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

