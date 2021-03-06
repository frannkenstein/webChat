import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog({ group }) {
  const classes = useStyles();
  // const { onClose, selectedValue, open } = props;

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

  return (
    <Dialog
      // onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={group}
    >
      <DialogTitle id="simple-dialog-title">Create Group</DialogTitle>
      <List>
        {/* {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            // key={}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"aakash"} />
          </ListItem>
        ))} */}
      </List>
    </Dialog>
  );
}

const Groups = ({ group }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  return <SimpleDialog selectedValue={selectedValue} open={group} />;
};

export default Groups;
