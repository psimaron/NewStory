import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';

export default function BasicForm({children} : {children:string}){
    return (
<Box component="form" sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
<TextField id="outlined-basic" label="Street address" variant="outlined"></TextField>
<TextField id="outlined-basic" label="City" variant="outlined"></TextField>
<TextField id="outlined-basic" label="State/Region" variant="outlined"></TextField>
<TextField id="outlined-basic" label="Zip" variant="outlined"></TextField>
<TextField id="outlined-basic" label="Country" variant="outlined"></TextField>
<Button type="submit" variant="outlined">{children}</Button>
</Box>
    )
}

