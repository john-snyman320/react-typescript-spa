import React, { useState } from 'react'
import { Plant } from '../types'
import {
  TextInput,
  Label,
  FormGroup,
  MutedSpan,
  ButtonPrimary,
  ErrorMsg,
} from '../theme/SharedComponents'

interface PlantsFromProps {
  onSave: (plant: Plant) => void
  saving: boolean
}

const plantDefault: Plant = { name: '' }

const PlantsForm: React.FC<PlantsFromProps> = (props: PlantsFromProps) => {
  const [plant, setPlant] = useState(plantDefault)
  const [error, setError] = useState(false)
  const { onSave, saving } = props

  const validate = (val: string) => {
    if (val === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  const onSubmit = () => {
    validate(plant.name)
    if (!error) {
      onSave(plant)
      setPlant(plantDefault)
    }
  }

  return (
    <div>
      <FormGroup>
        <Label>ID:</Label>
        <MutedSpan>
          <small>The ID will be auto generated after creating the plant</small>
        </MutedSpan>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="plantName">Plant Name:</Label>
        <TextInput
          id="plantName"
          type="text"
          placeholder="Enter Plant Name..."
          onKeyUp={e => validate(e.currentTarget.value)}
          onChange={e => setPlant({ name: e.target.value })}
          className={error ? 'error' : ''}
        />
        {error && <ErrorMsg>The plant name is required.</ErrorMsg>}
      </FormGroup>
      <ButtonPrimary disabled={saving} onClick={() => onSubmit()}>
        Add Plant
      </ButtonPrimary>
    </div>
  )
}

export default PlantsForm
