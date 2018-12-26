# ng-tree-table
A tree table component for Angular.

![alt text](https://github.com/sardanalokesh/ng-tree-table/blob/master/src/assets/images/tree-table-ss.png) 

# usage
```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

```html
<tree-table [columns]="columns">
  <tree-table-node>
    <ng-container class="node-columns">
      <td firstColumn>
        Node 1
      </td>
      <td>Some Value</td>
      <td>Some Value</td>
      <td>Some Value</td>
    </ng-container>
    <ng-container class="node-children">
      <tree-table-node>
        <ng-container class="node-columns">
          <td firstColumn>
            Node 2
          </td>
          <td>Some Value</td>
          <td>Some Value</td>
          <td>Some Value</td>
        </ng-container>
      </tree-table-node>
      <tree-table-node>
        <ng-container class="node-columns">
          <td firstColumn>
            Node 3
          </td>
          <td>Some Value</td>
          <td>Some Value</td>
          <td>Some Value</td>
        </ng-container>
        <ng-container class="node-children">
          <tree-table-node>
            <ng-container class="node-columns">
              <td firstColumn>
                Node 4
              </td>
              <td>Some Value</td>
              <td>Some Value</td>
              <td>Some Value</td>
            </ng-container>
          </tree-table-node>
        </ng-container>
      </tree-table-node>
    </ng-container>
  </tree-table-node>
</tree-table>
```
