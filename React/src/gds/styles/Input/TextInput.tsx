import type { InputProps } from "./TextInput-type"

export const TextInput = ({children} : InputProps) => {
    return (
    <div className="govuk-form-group">
      <h1 className="govuk-label-wrapper">
        <label className="govuk-label govuk-label--l" htmlFor="event-name">
          {children}
        </label>
      </h1>
      <input
        className="govuk-input"
        id="event-name"
        name="eventName"
        type="text"
      />
    </div>
    );
}