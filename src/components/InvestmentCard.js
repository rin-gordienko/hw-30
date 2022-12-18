import { useSelector, useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { deposit, withdraw, reset } from "../redux/investment/actions";

const InvestmantCard = () => {
  const dispatch = useDispatch();
  const { amount, error } = useSelector((state) => state.investment);

  const handleDeposit = () => {
    dispatch(deposit(10));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(10));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Card sx={{ maxWidth: 275, m: 4 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Investment
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {amount}$
        </Typography>

        {error && (
          <Typography sx={{ mb: 1.5 }} color="text.error">
            {error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDeposit}>
          Deposit 10$
        </Button>
        <Button size="small" onClick={handleWithdraw}>
          Withdraw 10$
        </Button>
        <Button size="small" onClick={handleReset}>
          Reset
        </Button>
      </CardActions>
    </Card>
  );
};

export default InvestmantCard;
