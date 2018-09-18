import React from 'react';
import { Button } from 'react-materialize';

class EditButton extends React.Component {
     render() {
       const { handleEdit } = this.props;
	  return (
	    <div>
	      <Button onClick={handleEdit} floating large className="green" fab="vertical" tooltip="Edit article" waves="light" icon="edit" />
	    </div>
	  );
       }
}

export default EditButton;
