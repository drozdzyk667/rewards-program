import PropTypes from 'prop-types';
import { Slider, Typography, Box } from '@mui/material';
import { MAX_AMOUNT_OF_USERS, MIN_AMOUNT_OF_USERS } from '../../helpers/constants';

export const UserSlider = (props) => {
    const { onChangeUsers: handleChangeUsers, users } = props;

    return (
        <Box sx={{ width: 300, mx: 'auto' }}>
            <Typography gutterBottom>
                Number of users: {users}
            </Typography>
            <Slider
                aria-labelledby="user-slider"
                value={users}
                min={MIN_AMOUNT_OF_USERS}
                max={MAX_AMOUNT_OF_USERS}
                onChange={handleChangeUsers}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};

UserSlider.propTypes = {
    onChangeUsers: PropTypes.func.isRequired,
    users: PropTypes.number.isRequired,
};