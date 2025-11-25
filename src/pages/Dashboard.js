import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaWallet, FaCalendarAlt, FaFolderOpen, FaFileSignature, FaMoneyBill } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import '../styles/dashboard.css'
import Checkbox from "@mui/material/Checkbox";

function Dashboard() {

  return (
    <div>
      <div className="container-fluid ">
        <div className="row g-3 m-5 justify-content-center rounded-4 row-card">
          <div className="col-lg-3 col-sm-12 d-flex flex-column align-items-center metric income">
            <div className="metric-label">Total Balance</div>
            <div className="metric-value">$5,280.50</div>
            <div className="metric-change">+2.5% from last month</div>
          </div>
          <div className="col-lg-3 col-sm-12 d-flex flex-column align-items-center metric">
            <div className="metric-label">Monthly Income</div>
            <div className="metric-value">$3,500.00</div>
            <div className="metric-change">On track</div>
          </div>
          <div className="col-lg-3 col-sm-12 d-flex flex-column align-items-center metric expenses">
            <div className="metric-label">Monthly Expenses</div>
            <div className="metric-value">$1,219.50</div>
            <div className="metric-change">-5% from last month</div>
          </div>
          <div className="col-lg-3 col-sm-12 d-flex flex-column align-items-center metric budget">
            <div className="metric-label">Remaining Budget</div>
            <div className="metric-value">$780.50</div>
            <div className="metric-change">38% of month left</div>
          </div>
        </div>
        <div class="row-card-actions  m-5 justify-content-center rounded-4">
          <div class="card-header">
            <h2 class="px-4"><i class="fas fa-bolt"></i> Quick Actions</h2>
          </div>
          <div class="quick-actions-grid row m-5 justify-content-center rounded-4">
            <div class="action-btn col-lg-4 col-sm-12" data-bs-toggle="modal"
              data-bs-target="#addTransactionModal">
              <div class="action-icon">
                <i class="fas fa-plus-circle"></i>
              </div>
              <div class="action-text">Add Transaction</div>
            </div>
            <div
              className="action-btn col-lg-4 col-sm-12"
              data-bs-toggle="modal"
              data-bs-target="#transferModal"
            >
              <div className="action-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="action-text">Transfer Money</div>
            </div>

            <div
              className="action-btn col-lg-4 col-sm-12"
              data-bs-toggle="modal"
              data-bs-target="#budgetModal"
            >
              <div className="action-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="action-text">Set Budget</div>
            </div>

            <div class="action-btn col-lg-4 col-sm-12" data-bs-toggle="modal" data-bs-target="#addBillModal">
              <div class="action-icon">
                <i class="fas fa-file-invoice"></i>
              </div>
              <div class="action-text">Add Bill</div>
            </div>

            <div class="action-btn col-lg-4 col-sm-12" data-bs-toggle="modal" data-bs-target="#addAccountModal">
              <div class="action-icon">
                <i class="fas fa-wallet"></i>
              </div>
              <div class="action-text">Add Account</div>
            </div>

            <div class="action-btn col-lg-4 col-sm-12" data-bs-toggle="modal" data-bs-target="#quickTransactionModal">
              <div class="action-icon">
                <i class="fas fa-file-invoice"></i>
              </div>
              <div class="action-text">Quick Transaction</div>
            </div>

          </div>
        </div>
        {/* bill */}
        <div class="modal fade" id="addBillModal" tabindex="-1">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

              <div class="modal-header">
                <h5 class="modal-title">Add Bill Reminder</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">
                <div class="row g-3">

                  <div class="col-md-6">
                    <label class="form-label">Bill Name</label>
                    <input type="text" class="form-control" placeholder="Electricity, Internet..." />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Amount</label>
                    <input type="number" class="form-control" placeholder="0.00" />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Payee</label>
                    <input type="text" class="form-control" placeholder="Company or Person" />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Category</label>
                    <select class="form-control">
                      <option>Utilities</option>
                      <option>Housing</option>
                      <option>Internet</option>
                      <option>Subscriptions</option>
                      <option>Insurance</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Account</label>
                    <select class="form-control">
                      <option>Checking Account</option>
                      <option>Savings Account</option>
                      <option>Credit Card</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Due Date</label>
                    <input type="date" class="form-control" />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Frequency</label>
                    <select class="form-control">
                      <option>One Time</option>
                      <option>Weekly</option>
                      <option>Bi-Weekly</option>
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>Yearly</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Notification Reminder</label>
                    <select class="form-control">
                      <option>On Due Date</option>
                      <option>1 Day Before</option>
                      <option>3 Days Before</option>
                      <option>1 Week Before</option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <label class="form-label">Notes</label>
                    <textarea class="form-control" rows="2" placeholder="Optional notes..."></textarea>
                  </div>

                  <div class="col-md-12 d-flex align-items-center">
                    <input type="checkbox" id="autopay" class="form-check-input me-2" />
                    <label for="autopay" class="form-check-label">Enable Auto-Pay</label>
                  </div>

                </div>
              </div>

              <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button class="btn btn-primary">Save Bill Reminder</button>
              </div>

            </div>
          </div>
        </div>

        {/* quickly transactions */}
        <div className="modal fade" id="quickTransactionModal" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Quick Transaction</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body">
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Amount</label>
                    <input type="number" className="form-control" placeholder="0.00" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <select className="form-control">
                      <option>Food & Dining</option>
                      <option>Shopping</option>
                      <option>Travel</option>
                      <option>Bills</option>
                      <option>Transport</option>
                      <option>Income</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Account</label>
                    <select className="form-control">
                      <option>Checking Account</option>
                      <option>Savings Account</option>
                      <option>Cash</option>
                      <option>Credit Card</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Notes</label>
                    <input type="text" className="form-control" placeholder="Optional note..." />
                  </div>

                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button className="btn btn-primary">Save Transaction</button>
              </div>

            </div>
          </div>
        </div>

        {/* transfer modal */}
        <div className="modal fade" id="transferModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Transfer Money</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body">

                {/* From & To */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">From Account</label>
                    <select className="form-select">
                      <option>Checking Account - 299</option>
                      <option>Savings Account - 0299</option>
                      <option>Credit Account - 883</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">To Account</label>
                    <select className="form-select">
                      <option>Savings Account - 0299</option>
                      <option>Checking Account - 299</option>
                      <option>Credit Account - 883</option>
                    </select>
                  </div>
                </div>

                {/* Amount & Date */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Amount</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>

                {/* Fee */}
                <div className="mb-3">
                  <label className="form-label">Fee</label>
                  <input type="number" className="form-control" placeholder="0.00" />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>

              </div>

              <div className="modal-footer">
                <button className="btn btn-primary w-100">Make Transfer</button>
              </div>

            </div>
          </div>
        </div>

        {/* Modal transaction*/}
        <div className="modal fade" id="addTransactionModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Transaction</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                {/* Transaction Type */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Transaction Type</label>
                  <div className="d-flex gap-3 pt-1">
                    <div>
                      <input type="radio" id="income" name="type" value="income" className="form-check-input" />
                      <label htmlFor="income" className="form-check-label ms-1">Income</label>
                    </div>

                    <div>
                      <input type="radio" id="expense" name="type" value="expense" className="form-check-input" />
                      <label htmlFor="expense" className="form-check-label ms-1">Expense</label>
                    </div>

                    <div>
                      <input type="radio" id="transfer" name="type" value="transfer" className="form-check-input" />
                      <label htmlFor="transfer" className="form-check-label ms-1">Transfer</label>
                    </div>
                  </div>
                </div>

                {/* Amount + Date (side by side) */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Amount</label>
                    <input className="form-control" type="text" name="amount" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Date</label>
                    <input className="form-control" type="date" name="date" />
                  </div>
                </div>

                {/* Account + Category (side by side) */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Account</label>
                    <select className="form-select">
                      <option>Ford</option>
                      <option>Volvo</option>
                      <option>Fiat</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option>Ford</option>
                      <option>Volvo</option>
                      <option>Fiat</option>
                    </select>
                  </div>
                </div>

                {/* Pay */}
                <div className="mb-3">
                  <label className="form-label">Pay</label>
                  <input className="form-control" type="text" name="pay" />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>

                <button className="btn btn-primary w-100 mt-2">
                  Save Transaction
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* set budget */}
        <div className="modal fade" id="budgetModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Set Budget</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body">

                {/* Budget Period */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Budget Period</label>
                  <select className="form-select">
                    <option>Weekly</option>
                    <option>Bi-Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>

                {/* Total Budget */}
                <div className="mb-3">
                  <label className="form-label">Total Budget</label>
                  <input type="number" className="form-control" placeholder="Enter total amount" />
                </div>

                {/* Category + percentage */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Category Budgets</label>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">Category</label>
                      <select className="form-select">
                        <option>Food & Dining</option>
                        <option>Transportation</option>
                        <option>Shopping</option>
                        <option>Utilities</option>
                        <option>Entertainment</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Percentage</label>
                      <select className="form-select">
                        <option>10%</option>
                        <option>20%</option>
                        <option>30%</option>
                        <option>40%</option>
                        <option>50%</option>
                        <option>60%</option>
                        <option>70%</option>
                        <option>80%</option>
                        <option>90%</option>
                      </select>
                    </div>

                  </div>
                </div>

                {/* Roll-over */}
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="rollover" />
                  <label htmlFor="rollover" className="form-check-label">
                    Roll over unused amounts to next month
                  </label>
                </div>

                {/* Alerts */}
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="alerts" />
                  <label htmlFor="alerts" className="form-check-label">
                    Send alerts when approaching limits
                  </label>
                </div>

                {/* Exclude transactions */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Exclude Transactions</label>
                  <input className="form-control" placeholder="Enter keywords to exclude (ex: refund, salary)" />
                </div>

              </div>

              <div className="modal-footer">
                <button className="btn btn-primary w-100">
                  Save Budget Settings
                </button>
              </div>

            </div>
          </div>
        </div>
        {/* add acount */}
        <div className="modal fade" id="addAccountModal" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Create New Account</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body">
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Account Type</label>
                    <select className="form-control">
                      <option>Checking</option>
                      <option>Savings</option>
                      <option>Cash</option>
                      <option>Credit Card</option>
                      <option>Investment</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Account Name</label>
                    <input type="text" className="form-control" placeholder="My Bank Account" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Bank / Institution</label>
                    <input type="text" className="form-control" placeholder="Bank Name" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-control" placeholder="123-456-789" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Initial Balance</label>
                    <input type="number" className="form-control" placeholder="0.00" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Currency</label>
                    <select className="form-control">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>LBP</option>
                      <option>GBP</option>
                      <option>CAD</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Account Color</label>
                    <input type="color" className="form-control form-control-color" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Icon</label>
                    <select className="form-control">
                      <option value="wallet">Wallet</option>
                      <option value="bank">Bank</option>
                      <option value="card">Credit Card</option>
                      <option value="piggy">Savings Piggy</option>
                    </select>
                  </div>

                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button className="btn btn-primary">Create Account</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Dashboard;

