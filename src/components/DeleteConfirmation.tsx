import React, { useState } from 'react'
import { Button, ButtonPrimary, Flex } from '../theme'

interface DeleteConfirmationProps {
  onDelete: () => void
}
const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onDelete,
}) => {
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)

  return (
    <Flex justifyContent="flex-end">
      {confirming ? (
        <>
          <ButtonPrimary
            disabled={deleting}
            onClick={() => {
              setDeleting(true)
              onDelete()
            }}
          >
            Yes, delete.
          </ButtonPrimary>
          <Button disabled={deleting} onClick={() => setConfirming(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <Button onClick={() => setConfirming(true)}>Delete</Button>
      )}
    </Flex>
  )
}

export default DeleteConfirmation
