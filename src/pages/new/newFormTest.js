 <form>
              <div className="row">
                <div className="col">
                  <h3>Select Artists</h3>
                  <select
                    className="form-select form-select mb-3"
                    name="artist"
                    aria-label=".form-select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col">
                  <h3>Select Genere</h3>
                  <select
                    className="form-select form-select mb-3"
                    name="artist"
                    aria-label=".form-select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="formInput">
                <label htmlFor="file">
                  Image:{" "}
                  {/*<DriveFolderUploadOutlinedIcon className="icon" />*/}
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="row">
                {inputs.map((input) => (
                  <div className="row">
                    <div className="formInput col" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
                <h6> how many tracks you want to add?</h6>
                <input
                  name="ta"
                  className="formInput col"
                  // value={track}
                  onChange={(e) => setTrackNo(e.target.value)}
                  type="number"
                  placeholder="example : 8"
                />
                <button
                  className="btn btn-primary col"
                  type="button"
                  onClick={(addTrack(), listCommandw)}
                >
                  Add tracks
                </button>
              </div>

              <div>{addList}</div>

              <button>Send</button>
            </form>
          </div>