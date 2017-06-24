const expect = require('chai').expect
const converter = require('../converter')
describe('Converter', () => {

   it('from2_to_12', async () => {
      const input = `<xliff xmlns="urn:oasis:names:tc:xliff:document:2.0" version="2.0" srcLang="en-US" trgLang="de-CH">
  <file id="namespace1">
    <unit id="key1">
      <segment>
        <source>Hello</source>
        <target>Hallo</target>
      </segment>
    </unit>
    <unit id="key2">
      <segment>
        <source>An application to manipulate and process XLIFF documents</source>
        <target>Eine Applikation um XLIFF Dokumente zu manipulieren und verarbeiten</target>
      </segment>
    </unit>
    <unit id="key.nested">
      <segment>
        <source>XLIFF Data Manager</source>
        <target>XLIFF Daten Manager</target>
      </segment>
    </unit>
  </file>
</xliff>`;

      const expected = `<xliff xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:oasis:names:tc:xliff:document:1.2 http://docs.oasis-open.org/xliff/v1.2/os/xliff-core-1.2-strict.xsd" xmlns="urn:oasis:names:tc:xliff:document:1.2" version="1.2">
  <file original="namespace1" datatype="plaintext" source-language="en-US" target-language="de-CH">
    <body>
      <trans-unit id="key1">
        <source>Hello</source>
        <target>Hallo</target>
      </trans-unit>
      <trans-unit id="key2">
        <source>An application to manipulate and process XLIFF documents</source>
        <target>Eine Applikation um XLIFF Dokumente zu manipulieren und verarbeiten</target>
      </trans-unit>
      <trans-unit id="key.nested">
        <source>XLIFF Data Manager</source>
        <target>XLIFF Daten Manager</target>
      </trans-unit>
    </body>
  </file>
</xliff>`

      const result = await converter.from2_to_12(input)
      expect(result).to.eql(expected)
   }) 


   it('from12_to_2', async () => {
      const expected = `<xliff xmlns="urn:oasis:names:tc:xliff:document:2.0" version="2.0" srcLang="en-US" trgLang="de-CH">
  <file id="namespace1">
    <unit id="key1">
      <segment>
        <source>Hello</source>
        <target>Hallo</target>
      </segment>
    </unit>
    <unit id="key2">
      <segment>
        <source>An application to manipulate and process XLIFF documents</source>
        <target>Eine Applikation um XLIFF Dokumente zu manipulieren und verarbeiten</target>
      </segment>
    </unit>
    <unit id="key.nested">
      <segment>
        <source>XLIFF Data Manager</source>
        <target>XLIFF Daten Manager</target>
      </segment>
    </unit>
  </file>
</xliff>`;

      const input = `<xliff xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:oasis:names:tc:xliff:document:1.2 http://docs.oasis-open.org/xliff/v1.2/os/xliff-core-1.2-strict.xsd" xmlns="urn:oasis:names:tc:xliff:document:1.2" version="1.2">
  <file original="namespace1" datatype="plaintext" source-language="en-US" target-language="de-CH">
    <body>
      <trans-unit id="key1">
        <source>Hello</source>
        <target>Hallo</target>
      </trans-unit>
      <trans-unit id="key2">
        <source>An application to manipulate and process XLIFF documents</source>
        <target>Eine Applikation um XLIFF Dokumente zu manipulieren und verarbeiten</target>
      </trans-unit>
      <trans-unit id="key.nested">
        <source>XLIFF Data Manager</source>
        <target>XLIFF Daten Manager</target>
      </trans-unit>
    </body>
  </file>
</xliff>`

      const result = await converter.from12_to_2(input)
      expect(result).to.eql(expected)
   }) 
 })