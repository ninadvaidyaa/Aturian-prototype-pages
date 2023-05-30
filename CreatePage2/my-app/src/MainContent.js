import React from 'react';

const MainContent = () => {
  return (
    <main>
      <form className="create-form">
        <label>
          Choose customer:
          <input type="text" name="customer" />
        </label>
        <label>
          Choose Customer Contact:
          <input type="text" name="customerContact" />
        </label>
        <label>
          Job ID:
          <input type="text" name="jobId" />
        </label>
        <label>
          Event Type (Optional):
          <input type="text" name="eventType" />
        </label>
        <label>
          Event Date:
          <input type="date" name="eventDate" />
        </label>
        <label>
          In-Hand Date:
          <input type="date" name="inHandDate" />
        </label>
        <label>
          Special Handling:
          <input type="text" name="specialHandling" />
        </label>
        <label>
          Salesperson:
          <input type="text" name="salesperson" />
        </label>
        <label>
          Admin / CSR:
          <input type="text" name="adminCsr" />
        </label>
        <label>
          Customer PO #:
          <input type="text" name="customerPo" />
        </label>
        <label>
          Tags:
          <input type="text" name="tags" />
        </label>
        <label>
          Process field:
          <input type="text" name="processField" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default MainContent;




