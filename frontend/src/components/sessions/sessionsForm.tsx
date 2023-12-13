import { Formik, Form, Field, FormikHelpers } from 'formik';

interface FormValues {
  course_name: string;
  description: string;
  session_status: string;
  start_time: string;
  end_time: string;
}

const initialValues: FormValues = {
  course_name: '',
  description: '',
  session_status: '',
  start_time: '',
  end_time: '',
};

const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
  const formattedData = {
    course_name: values.course_name,
    description: values.description,
    session_status: values.session_status,
    start_time: new Date(values.start_time).toISOString(),
    end_time: new Date(values.end_time).toISOString(),
  };

  // Send the formattedData to the backend
  // Example: fetch('/api/endpoint', { method: 'POST', body: JSON.stringify(formattedData) })
  console.log(formattedData);

  actions.setSubmitting(false);
};

const SessionsForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create a Session</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-lg font-medium text-gray-800">
                Course Name
              </label>
              <Field
              
              as="select"
                id="course_name"
                name="course_name"
                className="border border-gray-300 rounded-md p-2 w-full"
              >
                 <option value="Infographics">Infographics</option>
                <option value="politics">politics</option>
                <option value = "programming">programming</option>
                <option value = "Buisness">Buisness</option>
                </Field>
            </div>

            <div>
              <label htmlFor="description" className="text-lg font-medium text-gray-800">
                Description
              </label>
              <Field
                id="description"
                name="description"
                placeholder="Enter the session description"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="session_status" className="text-lg font-medium text-gray-800">
                Session Status
              </label>
              <Field
                as="select"
                id="session_course"
                name="session_status"
                className="border border-gray-300 rounded-md p-2 w-full"
              >
               <option value="planned">Planned</option>
                <option value="ongoing">Ongoing</option>
                <option value="">Completed</option>
              </Field>
            </div>

            <div>
              <label htmlFor="start_time" className="text-lg font-medium text-gray-800">
                Start Time
              </label>
              <Field
                id="start_time"
                name="start_time"
                type="datetime-local"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="end_time" className="text-lg font-medium text-gray-800">
                End Time
              </label>
              <Field
                id="end_time"
                name="end_time"
                type="datetime-local"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white rounded-md py-2 px-4 hover:bg-gray-700"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SessionsForm;