import { red } from "@mui/material/colors";
import { createTheme } from "@mui/system";

export const theme = createTheme({
    components: {
     MuiTyphography: {
        variants: [
            {
                props: {
                    variant: "primary"
                },
                style: {
                    fontSize: 11,
                    backgroundColor: red
                }
            }
        ]
     }
    }
})